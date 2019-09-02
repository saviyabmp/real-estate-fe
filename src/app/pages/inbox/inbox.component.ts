import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import sdk from 'matrix-js-sdk';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  client ;
  serverState;
  messages = new Array<{name, message}>();
  messageForm: FormGroup;
  homeServerUrl = "https://matrix.org";
  testRoomId = "!LTLLFEhlQYgRvlQvjv:matrix.org";
  thisUser = "@dahamv:matrix.org";
  accessToken = "MDAxOGxvY2F0aW9uIG1hdHJpeC5vcmcKMDAxM2lkZW50aWZpZXIga2V5CjAwMTBjaWQgZ2VuID0gMQowMDI1Y2lkIHVzZXJfaWQgPSBAZGFoYW12Om1hdHJpeC5vcmcKMDAxNmNpZCB0eXBlID0gYWNjZXNzCjAwMjFjaWQgbm9uY2UgPSBNYkgzZUcjUlhecGZoM0N2CjAwMmZzaWduYXR1cmUg_CZP7E7n0yrgIA4SBYdMYk1PV5aiAtyoK-VsQU2ARPIK";

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.client = sdk.createClient({
    baseUrl: this.homeServerUrl,
    accessToken: this.accessToken,
    userId: this.thisUser});
    this.client.startClient();
    this.getMessageEvents(this.testRoomId, this.messages);

  }

  getState() {
    this.client.once('sync', function(state, prevState, res) {
        this.serverState = state;
        console.log(state); // state will be 'PREPARED' when the client is ready to use
    });
  }

  getMessageEvents(testRoomId, messages) {
    this.client.on("Room.timeline", function(event, room, toStartOfTimeline) {
            // we know we only want to respond to messages
            if (event.getType() !== "m.room.message") {
                return;
            }
            console.log(event.getRoomId());
            // we are only intested in messages from the test room, which start with "!"
            if (event.getRoomId() == testRoomId) {
                var message = {name: event.getSender(), message: event.getContent().body};

                messages.push(message);
                console.log (JSON.stringify(messages));
            }
        });
    }

  sendMessage() {
        var content = {
            "body": this.messageForm.controls.message.value,
            "msgtype": "m.text"
        };

        this.client.sendEvent(this.testRoomId, "m.room.message", content, "").then((res) => {
        // message sent successfully
        }).catch((err) => {
            console.log(err);
        });
  }

}
