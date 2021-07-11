# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: [foo, [x,y = 20,z], bar = B] = arr;
## Options

`````js
{}
`````
## Input

`````js
[foo, [x,y = 20,z], bar = B] = arr;
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 1,
                                "end": 4
                            },
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 8
                                        },
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 10,
                                                "end": 12
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 20,
                                                "rawText": "20",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 15
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 7,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 18
                            },
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 23
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 23,
                                    "end": 25
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 28,
                    "end": 30
                },
                "right": {
                    "kind": 134299649,
                    "text": "arr",
                    "rawText": "arr",
                    "flags": 96,
                    "start": 30,
                    "end": 34
                },
                "flags": 32,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "[foo, [x,y = 20,z], bar = B] = arr;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  [foo, [x, y = 20, z,], bar = B,] = arr;

```

### Diagnostics

```javascript
✔ No errors
```

