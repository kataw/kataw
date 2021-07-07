# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/async-await-errors/gen/stand_alone
> :: test: stand alone
> :: case: function* g() { var f = async(yield) => 1; }
## Options

`````js
{}
`````
## Input

`````js
function* g() { var f = async(yield) => 1; }
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 19
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 29
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 229,
                                                        "yieldKeyword": {
                                                            "kind": 8454253,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 35
                                                        },
                                                        "delegate": false,
                                                        "asteriskToken": null,
                                                        "expression": null,
                                                        "flags": 32,
                                                        "transformFlags": 4096,
                                                        "start": 30,
                                                        "end": 35
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 23
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 23,
                                            "end": 36
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 19,
                                        "end": 36
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 36
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 36
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 36
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 39,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 39,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function* g() { var f = async(yield) => 1; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 36, end: 39
✖ Expected a `;` - start: 36, end: 39
✖ Declaration or statement expected - start: 42, end: 44

```

