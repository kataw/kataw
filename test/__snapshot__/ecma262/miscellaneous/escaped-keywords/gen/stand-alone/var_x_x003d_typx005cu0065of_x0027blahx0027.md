# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/gen/stand-alone
> :: test: stand-alone
> :: case: var x = typ\u0065of 'blah'
## Options

`````js
{}
`````
## Input

`````js
var x = typ\u0065of 'blah'
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 138477613,
                                "flags": 16480,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 19
                            },
                            "operand": {
                                "kind": 201392131,
                                "text": "blah",
                                "rawText": "'blah'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 7,
                            "end": 26
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "var x = typ\\u0065of 'blah'",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 7, end: 26

```

