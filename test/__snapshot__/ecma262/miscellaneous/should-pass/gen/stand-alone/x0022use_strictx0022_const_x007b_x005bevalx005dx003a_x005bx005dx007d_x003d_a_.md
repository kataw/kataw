# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: "use strict"; const { [eval]: []} = a;
## Options

`````js
{}
`````
## Input

`````js
"use strict"; const { [eval]: []} = a;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "eval",
                                                "rawText": "eval",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 28
                                        },
                                        "value": {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 324,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 32
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 33
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 37
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 19,
                        "end": 37
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 19,
                "end": 37
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; const { [eval]: []} = a;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

"\"use strict\"";
const { [eval]: [] } = a;
```

### Diagnostics

```javascript
✔ No errors
```

