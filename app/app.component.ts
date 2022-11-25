import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  intro = {
    title: 'Pick a Topic',
    paragraph: 'We hope you enjoy the read.😊',
    image:
      'https://lh3.googleusercontent.com/ideWQZnZ14pqonb9IDGvKIvhd7z4rvwRKDkaxIqZ6CkzevEav3_bUJJafDfuk0BTWYqnChmIrop-IN1BSwKPGYknlDX_yyWQsbn5rLn__oRTL6Bry26egdXkGcvx-7jDdU4zv5VaIAJxhOjJQ5YVH0NHMeP6E5JNWDzP-W8NPwpgSI359bB6UrAzu6eE2F-hSSHO-OYWeNbDQz0iCFSNRP5_KbAgAwYcFrzOpGx-IhbnklIDpYUWBG87zvfmJ3e20ZITpCNvhmCJmsGxFkRC_8mWUpR3eOZA82gAw8uUqwnTK2glAnqVpdD5UIQWxGxWWrB3ogSn1QV0ajAzwexShEC36gzbjYv98tRp8bgHugTLD9SY7s2RX7cEFR-KLFRsTHzNOcw6e22z2YCCe-gzArxtwstiVJo7X1aCHRPV01rW-jgw0n01_PhgjYInEqmuyhiilzhwrumzqHb2W8xS1H7PreLzZEOoLOWhIAg1EMkScZUnkl5Sq99qvT4zEiOvv5yJ5idZi9J4Ne_IAk0DAgBjwg-8OtFON40xUsD1SUlyJQrHA6KSOBx9a3fuS7aREVbV43wdFjkdjPeK9wuTMY4LLZJXSNB1rs7PrGpOpojZViYaj1DJb-y8v60YZFmebdwCP-wO59BFh4ilHXtwVA6NGH2uUR0TnyqsjBqrHA-u2KV9ZqPMRMJI2IwyWQl2enAVHn8pyA6JOECgl0VL6DM7DKV7bMH7avc9LX64rTtuWxZ7gCKaYpZofRrjnjkARop3UJg4fOzsKPMpuGgugkj0F1KgJTReeGL-GEkv7JGqI8K3I7pjj-6phuShkRRsnK8y7TlDHlXQtaWCBs8aIJvdvlslnDu3hdgwpuKEnm2huJ7Ohw_HmAQgSx9B-BXEJeFKgmsbZR1avzl20-7N_cpwPR49xOWOvw3buzDqePsQ_hyS=w653-h738-no?authuser=0',
  };

  constructor() {}

  ngOnInit(): void {}
}
