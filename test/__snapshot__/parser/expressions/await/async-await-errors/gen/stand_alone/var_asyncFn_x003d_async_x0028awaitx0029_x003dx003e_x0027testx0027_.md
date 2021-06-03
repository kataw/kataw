# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/await/async-await-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\async-await-errors\gen\stand_alone
> :: test: stand alone
> :: case: var asyncFn = async (await) => 'test';
## Input

`````js
var asyncFn = async (await) => 'test';
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
                            "text": "asyncFn",
                            "rawText": "asyncFn",
                            "flags": 96,
                            "start": 3,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 27,
                                "end": 30
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 26
                                }
                            ],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 13,
                                "end": 19
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 201392131,
                                "text": "test",
                                "rawText": "'test'",
                                "flags": 4194400,
                                "start": 30,
                                "end": 37
                            },
                            "flags": 288,
                            "start": 13,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "var asyncFn = async (await) => 'test';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

var asyncFn = async (await) =>  "'test'";
```

### Diagnostics

```javascript
✔ No errors
```

