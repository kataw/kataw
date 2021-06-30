# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: function arrayRestWithNestedRest(...[...r]) {}
## Options

`````js
{}
`````
## Input

`````js
function arrayRestWithNestedRest(...[...r]) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "arrayRestWithNestedRest",
                "rawText": "arrayRestWithNestedRest",
                "flags": 96,
                "start": 8,
                "end": 32
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 33,
                            "end": 36
                        },
                        "left": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 37,
                                            "end": 40
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "r",
                                            "rawText": "r",
                                            "flags": 96,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "start": 37,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 37,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 36,
                            "end": 42
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": null,
                        "flags": 34,
                        "start": 33,
                        "end": 42
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 33,
                "end": 42
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 45,
                    "end": 45
                },
                "flags": 32,
                "start": 43,
                "end": 46
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "function arrayRestWithNestedRest(...[...r]) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

function arrayRestWithNestedRest(...[...r]) { }

```

### Diagnostics

```javascript
✔ No errors
```

