# Kataw parser test case

## Input

`````js
a = b || // Comment
c;

a = b || // TODO this is a very very very very long comment that makes it go > 80 columns
c;

a = b && // Comment
c;

a = b && // TODO this is a very very very very long comment that makes it go > 80 columns
c;

a = b + // Comment
c;

a = b + // TODO this is a very very very very long comment that makes it go > 80 columns
c;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 21
                    },
                    "flags": 96,
                    "transformFlags": 1024,
                    "start": 3,
                    "end": 21
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 25
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 27
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 29
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 32
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 115
                    },
                    "flags": 96,
                    "transformFlags": 1024,
                    "start": 27,
                    "end": 115
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 22,
                "end": 115
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 22,
            "end": 116
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 116,
                    "end": 119
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 119,
                    "end": 121
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 121,
                        "end": 123
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 123,
                        "end": 126
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 126,
                        "end": 139
                    },
                    "flags": 96,
                    "transformFlags": 1024,
                    "start": 121,
                    "end": 139
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 116,
                "end": 139
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 116,
            "end": 140
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 140,
                    "end": 143
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 143,
                    "end": 145
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 145,
                        "end": 147
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 147,
                        "end": 150
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 150,
                        "end": 233
                    },
                    "flags": 96,
                    "transformFlags": 1024,
                    "start": 145,
                    "end": 233
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 140,
                "end": 233
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 140,
            "end": 234
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 234,
                    "end": 237
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 237,
                    "end": 239
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 239,
                        "end": 241
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 241,
                        "end": 243
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 243,
                        "end": 256
                    },
                    "flags": 96,
                    "transformFlags": 1024,
                    "start": 239,
                    "end": 256
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 234,
                "end": 256
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 234,
            "end": 257
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 257,
                    "end": 260
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 260,
                    "end": 262
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 262,
                        "end": 264
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 264,
                        "end": 266
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 266,
                        "end": 349
                    },
                    "flags": 96,
                    "transformFlags": 1024,
                    "start": 262,
                    "end": 349
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 257,
                "end": 349
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 257,
            "end": 350
        }
    ],
    "isModule": false,
    "source": "a = b || // Comment\nc;\n\na = b || // TODO this is a very very very very long comment that makes it go > 80 columns\nc;\n\na = b && // Comment\nc;\n\na = b && // TODO this is a very very very very long comment that makes it go > 80 columns\nc;\n\na = b + // Comment\nc;\n\na = b + // TODO this is a very very very very long comment that makes it go > 80 columns\nc;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 350
}
```

### Printed

```javascript
a = b || c;
a = b || c;

a = b && c;

a = b && c;

a = b + c;

a = b + c;

```

### Diagnostics

```javascript
✔ No errors
```

