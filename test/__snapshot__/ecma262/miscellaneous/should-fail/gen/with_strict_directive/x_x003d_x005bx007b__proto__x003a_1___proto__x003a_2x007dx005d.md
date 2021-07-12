# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: x = [{__proto__: 1, __proto__: 2}]
## Options

`````js
{}
`````
## Input

`````js
"use strict"; x = [{__proto__: 1, __proto__: 2}]
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
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "__proto__",
                                                "rawText": "__proto__",
                                                "flags": 96,
                                                "start": 20,
                                                "end": 29
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "start": 30,
                                                "end": 32
                                            },
                                            "flags": 36,
                                            "start": 20,
                                            "end": 32
                                        },
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "__proto__",
                                                "rawText": "__proto__",
                                                "flags": 96,
                                                "start": 33,
                                                "end": 43
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 2,
                                                "rawText": "2",
                                                "flags": 96,
                                                "start": 44,
                                                "end": 46
                                            },
                                            "flags": 36,
                                            "start": 33,
                                            "end": 46
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 20,
                                    "start": 20,
                                    "end": 46
                                },
                                "flags": 52,
                                "start": 19,
                                "end": 47
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 19,
                        "end": 47
                    },
                    "flags": 32,
                    "start": 17,
                    "end": 48
                },
                "flags": 32,
                "start": 13,
                "end": 48
            },
            "flags": 16,
            "start": 13,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; x = [{__proto__: 1, __proto__: 2}]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

  "\"use strict\"";
  x = [{ __proto__: 1, __proto__: 2 },];

```

### Diagnostics

```javascript
✔ No errors
```

