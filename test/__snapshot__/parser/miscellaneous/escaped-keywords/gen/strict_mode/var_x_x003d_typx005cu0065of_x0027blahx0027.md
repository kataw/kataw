# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/escaped-keywords/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\escaped-keywords\gen\strict_mode
> :: test: strict mode
> :: case: var x = typ\u0065of 'blah'
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
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 138477613,
                                "flags": 16448,
                                "start": 7,
                                "end": 19
                            },
                            "operand": {
                                "kind": 201392131,
                                "text": "blah",
                                "rawText": "'blah'",
                                "flags": 4194400,
                                "start": 19,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "var x = typ\\u0065of 'blah'",
    "fileName": "__root__",
    "flags": 0,
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

