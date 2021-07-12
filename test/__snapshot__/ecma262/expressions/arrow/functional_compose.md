# Kataw parser test case

## Input

`````js
compose(
  sortBy(x => x),
  flatten,
  map(x => [x, x*2])
);

somelib.compose(
  sortBy(x => x),
  flatten,
  map(x => [x, x*2])
);

composeFlipped(
  sortBy(x => x),
  flatten,
  map(x => [x, x*2])
);

somelib.composeFlipped(
  sortBy(x => x),
  flatten,
  map(x => [x, x*2])
);

// no regression (#4602)
const hasValue = hasOwnProperty(a, b);

this.compose(sortBy(x => x), flatten);
this.a.b.c.compose(sortBy(x => x), flatten);
someObj.someMethod(this.field.compose(a, b));

class A extends B {
  compose() {
    super.compose(sortBy(x => x), flatten);
  }
}

this.subscriptions.add(
            this.componentUpdates
                .pipe(startWith(this.props), distinctUntilChanged(isEqual))
                .subscribe(props => {

                })
        )
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "compose",
                    "rawText": "compose",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 7
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "sortBy",
                                "rawText": "sortBy",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 17
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 22
                                        },
                                        "contents": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 24
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 8,
                            "end": 25
                        },
                        {
                            "kind": 134299649,
                            "text": "flatten",
                            "rawText": "flatten",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 36
                        },
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "map",
                                "rawText": "map",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 43
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 45
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 45,
                                            "end": 48
                                        },
                                        "contents": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 50,
                                                        "end": 51
                                                    },
                                                    {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 52,
                                                            "end": 54
                                                        },
                                                        "operatorToken": {
                                                            "kind": 67143222,
                                                            "flags": 96,
                                                            "transformFlags": 32,
                                                            "start": 54,
                                                            "end": 55
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 55,
                                                            "end": 56
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 5120,
                                                        "start": 52,
                                                        "end": 56
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 56
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 48,
                                            "end": 57
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 57
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 57
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 37,
                            "end": 58
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 58
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 60
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "somelib",
                        "rawText": "somelib",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 61,
                        "end": 70
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "compose",
                        "rawText": "compose",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 71,
                        "end": 78
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 61,
                    "end": 78
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "sortBy",
                                "rawText": "sortBy",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 79,
                                "end": 88
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 89,
                                            "end": 90
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 90,
                                            "end": 93
                                        },
                                        "contents": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 93,
                                            "end": 95
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 89,
                                        "end": 95
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 89,
                                "end": 95
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 79,
                            "end": 96
                        },
                        {
                            "kind": 134299649,
                            "text": "flatten",
                            "rawText": "flatten",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 97,
                            "end": 107
                        },
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "map",
                                "rawText": "map",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 108,
                                "end": 114
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 115,
                                            "end": 116
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 116,
                                            "end": 119
                                        },
                                        "contents": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 121,
                                                        "end": 122
                                                    },
                                                    {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 123,
                                                            "end": 125
                                                        },
                                                        "operatorToken": {
                                                            "kind": 67143222,
                                                            "flags": 96,
                                                            "transformFlags": 32,
                                                            "start": 125,
                                                            "end": 126
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 126,
                                                            "end": 127
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 5120,
                                                        "start": 123,
                                                        "end": 127
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 121,
                                                "end": 127
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 119,
                                            "end": 128
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 115,
                                        "end": 128
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 115,
                                "end": 128
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 108,
                            "end": 129
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 79,
                    "end": 129
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 61,
                "end": 131
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 61,
            "end": 132
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "composeFlipped",
                    "rawText": "composeFlipped",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 132,
                    "end": 148
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "sortBy",
                                "rawText": "sortBy",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 149,
                                "end": 158
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 159,
                                            "end": 160
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 160,
                                            "end": 163
                                        },
                                        "contents": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 163,
                                            "end": 165
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 159,
                                        "end": 165
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 159,
                                "end": 165
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 149,
                            "end": 166
                        },
                        {
                            "kind": 134299649,
                            "text": "flatten",
                            "rawText": "flatten",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 167,
                            "end": 177
                        },
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "map",
                                "rawText": "map",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 178,
                                "end": 184
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 185,
                                            "end": 186
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 186,
                                            "end": 189
                                        },
                                        "contents": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 191,
                                                        "end": 192
                                                    },
                                                    {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 193,
                                                            "end": 195
                                                        },
                                                        "operatorToken": {
                                                            "kind": 67143222,
                                                            "flags": 96,
                                                            "transformFlags": 32,
                                                            "start": 195,
                                                            "end": 196
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 196,
                                                            "end": 197
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 5120,
                                                        "start": 193,
                                                        "end": 197
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 191,
                                                "end": 197
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 189,
                                            "end": 198
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 185,
                                        "end": 198
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 185,
                                "end": 198
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 178,
                            "end": 199
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 199
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 132,
                "end": 201
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 132,
            "end": 202
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "somelib",
                        "rawText": "somelib",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 202,
                        "end": 211
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "composeFlipped",
                        "rawText": "composeFlipped",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 212,
                        "end": 226
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 202,
                    "end": 226
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "sortBy",
                                "rawText": "sortBy",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 227,
                                "end": 236
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 237,
                                            "end": 238
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 238,
                                            "end": 241
                                        },
                                        "contents": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 241,
                                            "end": 243
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 237,
                                        "end": 243
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 237,
                                "end": 243
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 227,
                            "end": 244
                        },
                        {
                            "kind": 134299649,
                            "text": "flatten",
                            "rawText": "flatten",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 245,
                            "end": 255
                        },
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "map",
                                "rawText": "map",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 256,
                                "end": 262
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 263,
                                            "end": 264
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 264,
                                            "end": 267
                                        },
                                        "contents": {
                                            "kind": 119,
                                            "elementList": {
                                                "kind": 270,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 269,
                                                        "end": 270
                                                    },
                                                    {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 271,
                                                            "end": 273
                                                        },
                                                        "operatorToken": {
                                                            "kind": 67143222,
                                                            "flags": 96,
                                                            "transformFlags": 32,
                                                            "start": 273,
                                                            "end": 274
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 274,
                                                            "end": 275
                                                        },
                                                        "flags": 96,
                                                        "transformFlags": 5120,
                                                        "start": 271,
                                                        "end": 275
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 269,
                                                "end": 275
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 267,
                                            "end": 276
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 263,
                                        "end": 276
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 263,
                                "end": 276
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 256,
                            "end": 277
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 227,
                    "end": 277
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 202,
                "end": 279
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 202,
            "end": 280
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 280,
                "end": 312
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "hasValue",
                            "rawText": "hasValue",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 312,
                            "end": 321
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "hasOwnProperty",
                                "rawText": "hasOwnProperty",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 323,
                                "end": 338
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 339,
                                        "end": 340
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 341,
                                        "end": 343
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 339,
                                "end": 343
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 323,
                            "end": 344
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 312,
                        "end": 344
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 312,
                "end": 344
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 280,
            "end": 345
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 4276321,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 345,
                        "end": 351
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "compose",
                        "rawText": "compose",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 352,
                        "end": 359
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 345,
                    "end": 359
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "sortBy",
                                "rawText": "sortBy",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 360,
                                "end": 366
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 367,
                                            "end": 368
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 368,
                                            "end": 371
                                        },
                                        "contents": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 371,
                                            "end": 373
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 367,
                                        "end": 373
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 367,
                                "end": 373
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 360,
                            "end": 374
                        },
                        {
                            "kind": 134299649,
                            "text": "flatten",
                            "rawText": "flatten",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 375,
                            "end": 383
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 360,
                    "end": 383
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 345,
                "end": 384
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 345,
            "end": 385
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 129,
                            "member": {
                                "kind": 129,
                                "member": {
                                    "kind": 4276321,
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 385,
                                    "end": 390
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 391,
                                    "end": 392
                                },
                                "flags": 97,
                                "transformFlags": 2,
                                "start": 385,
                                "end": 392
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 393,
                                "end": 394
                            },
                            "flags": 97,
                            "transformFlags": 2,
                            "start": 385,
                            "end": 394
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 395,
                            "end": 396
                        },
                        "flags": 97,
                        "transformFlags": 2,
                        "start": 385,
                        "end": 396
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "compose",
                        "rawText": "compose",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 397,
                        "end": 404
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 385,
                    "end": 404
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "sortBy",
                                "rawText": "sortBy",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 405,
                                "end": 411
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 412,
                                            "end": 413
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 413,
                                            "end": 416
                                        },
                                        "contents": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 416,
                                            "end": 418
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 412,
                                        "end": 418
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 412,
                                "end": 418
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 405,
                            "end": 419
                        },
                        {
                            "kind": 134299649,
                            "text": "flatten",
                            "rawText": "flatten",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 420,
                            "end": 428
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 405,
                    "end": 428
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 385,
                "end": 429
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 385,
            "end": 430
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "someObj",
                        "rawText": "someObj",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 430,
                        "end": 438
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "someMethod",
                        "rawText": "someMethod",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 439,
                        "end": 449
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 430,
                    "end": 449
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 4276321,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 450,
                                        "end": 454
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "field",
                                        "rawText": "field",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 455,
                                        "end": 460
                                    },
                                    "flags": 96,
                                    "transformFlags": 2,
                                    "start": 450,
                                    "end": 460
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "compose",
                                    "rawText": "compose",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 461,
                                    "end": 468
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 450,
                                "end": 468
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 469,
                                        "end": 470
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 471,
                                        "end": 473
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 469,
                                "end": 473
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 450,
                            "end": 474
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 450,
                    "end": 474
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 430,
                "end": 475
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 430,
            "end": 476
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 476,
                "end": 483
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 483,
                "end": 485
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 485,
                        "end": 493
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 493,
                        "end": 495
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 493,
                    "end": 495
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "compose",
                                    "rawText": "compose",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 497,
                                    "end": 507
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 508,
                                    "end": 509
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4259935,
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 511,
                                                            "end": 521
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "compose",
                                                            "rawText": "compose",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 522,
                                                            "end": 529
                                                        },
                                                        "flags": 97,
                                                        "transformFlags": 2,
                                                        "start": 511,
                                                        "end": 529
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "sortBy",
                                                                    "rawText": "sortBy",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 530,
                                                                    "end": 536
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 271,
                                                                            "asyncKeyword": null,
                                                                            "typeParameters": null,
                                                                            "arrowPatameterList": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 537,
                                                                                "end": 538
                                                                            },
                                                                            "returnType": null,
                                                                            "arrowToken": {
                                                                                "kind": 10,
                                                                                "flags": 64,
                                                                                "transformFlags": 0,
                                                                                "start": 538,
                                                                                "end": 541
                                                                            },
                                                                            "contents": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 541,
                                                                                "end": 543
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 537,
                                                                            "end": 543
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 537,
                                                                    "end": 543
                                                                },
                                                                "flags": 268435488,
                                                                "transformFlags": 1,
                                                                "start": 530,
                                                                "end": 544
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "flatten",
                                                                "rawText": "flatten",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 545,
                                                                "end": 553
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 530,
                                                        "end": 553
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 511,
                                                    "end": 554
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 511,
                                                "end": 555
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 511,
                                        "end": 555
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 509,
                                    "end": 559
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 507,
                                "end": 559
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 497,
                            "end": 559
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 497,
                    "end": 559
                },
                "flags": 485,
                "transformFlags": 0,
                "start": 32,
                "end": 561
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 476,
            "end": 561
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 4276321,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 561,
                            "end": 567
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "subscriptions",
                            "rawText": "subscriptions",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 568,
                            "end": 581
                        },
                        "flags": 97,
                        "transformFlags": 2,
                        "start": 561,
                        "end": 581
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "add",
                        "rawText": "add",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 582,
                        "end": 585
                    },
                    "flags": 97,
                    "transformFlags": 2,
                    "start": 561,
                    "end": 585
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 4276321,
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 586,
                                                "end": 603
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "componentUpdates",
                                                "rawText": "componentUpdates",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 604,
                                                "end": 620
                                            },
                                            "flags": 97,
                                            "transformFlags": 2,
                                            "start": 586,
                                            "end": 620
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "pipe",
                                            "rawText": "pipe",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 638,
                                            "end": 642
                                        },
                                        "flags": 97,
                                        "transformFlags": 2,
                                        "start": 586,
                                        "end": 642
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "startWith",
                                                    "rawText": "startWith",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 643,
                                                    "end": 652
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 4276321,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 653,
                                                                "end": 657
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "props",
                                                                "rawText": "props",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 658,
                                                                "end": 663
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 2,
                                                            "start": 653,
                                                            "end": 663
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 653,
                                                    "end": 663
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1,
                                                "start": 643,
                                                "end": 664
                                            },
                                            {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "distinctUntilChanged",
                                                    "rawText": "distinctUntilChanged",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 665,
                                                    "end": 686
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "isEqual",
                                                            "rawText": "isEqual",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 687,
                                                            "end": 694
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 687,
                                                    "end": 694
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1,
                                                "start": 665,
                                                "end": 695
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 643,
                                        "end": 695
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 586,
                                    "end": 696
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "subscribe",
                                    "rawText": "subscribe",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 714,
                                    "end": 723
                                },
                                "flags": 268435488,
                                "transformFlags": 2,
                                "start": 586,
                                "end": 723
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 134299649,
                                            "text": "props",
                                            "rawText": "props",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 724,
                                            "end": 729
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 729,
                                            "end": 732
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 33,
                                                "transformFlags": 0,
                                                "start": 734,
                                                "end": 734
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 732,
                                            "end": 753
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 724,
                                        "end": 753
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 724,
                                "end": 753
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 586,
                            "end": 754
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 586,
                    "end": 754
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 561,
                "end": 764
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 561,
            "end": 764
        }
    ],
    "isModule": false,
    "source": "compose(\n  sortBy(x => x),\n  flatten,\n  map(x => [x, x*2])\n);\n\nsomelib.compose(\n  sortBy(x => x),\n  flatten,\n  map(x => [x, x*2])\n);\n\ncomposeFlipped(\n  sortBy(x => x),\n  flatten,\n  map(x => [x, x*2])\n);\n\nsomelib.composeFlipped(\n  sortBy(x => x),\n  flatten,\n  map(x => [x, x*2])\n);\n\n// no regression (#4602)\nconst hasValue = hasOwnProperty(a, b);\n\nthis.compose(sortBy(x => x), flatten);\nthis.a.b.c.compose(sortBy(x => x), flatten);\nsomeObj.someMethod(this.field.compose(a, b));\n\nclass A extends B {\n  compose() {\n    super.compose(sortBy(x => x), flatten);\n  }\n}\n\nthis.subscriptions.add(\n            this.componentUpdates\n                .pipe(startWith(this.props), distinctUntilChanged(isEqual))\n                .subscribe(props => {\n\n                })\n        )",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 764
}
```

### Printed

```javascript
compose(sortBy(x => x), flatten, map(x => [x, x * 2]));
somelib.compose(sortBy(x => x), flatten, map(x => [x, x * 2]));

composeFlipped(sortBy(x => x), flatten, map(x => [x, x * 2]));

somelib.composeFlipped(sortBy(x => x), flatten, map(x => [x, x * 2]));

// no regression (#4602)
const hasValue = hasOwnProperty(a, b);

this.compose(sortBy(x => x), flatten);

this.a.b.c.compose(sortBy(x => x), flatten);

someObj.someMethod(this.field.compose(a, b));

class A extends B {
  compose() {
    super.compose(sortBy(x => x), flatten);
  }
}

this.subscriptions.add(
  this.componentUpdates.pipe(
    startWith(this.props),
    distinctUntilChanged(isEqual)
  ).subscribe(props => {})
);

```

### Diagnostics

```javascript
✔ No errors
```

