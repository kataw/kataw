# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: k
> :: test: in a block
> :: case: function f(foo = +await bar){}
## Options

`````js
{}
`````
## Input

`````js
{ function f(foo = +await bar){} }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 1,
                            "end": 10
                        },
                        "asteriskToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 16
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "operand": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 25
                                    },
                                    "flags": 34,
                                    "start": 13,
                                    "end": 25
                                },
                                {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 29
                                }
                            ],
                            "trailingComma": false,
                            "flags": 34,
                            "start": 12,
                            "end": 30
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 31,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 30,
                            "end": 32
                        },
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "{ function f(foo = +await bar){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 26, end: 29

```

