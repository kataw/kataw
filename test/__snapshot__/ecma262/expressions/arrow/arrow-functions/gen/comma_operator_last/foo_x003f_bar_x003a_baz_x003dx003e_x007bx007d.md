# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/arrow-functions/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/arrow-functions/gen/comma_operator_last
> :: test: comma operator last
> :: case: foo ? bar : baz => {}
## Options

`````js
{}
`````
## Input

`````js
foo ? bar : baz => {}, bar
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 197,
                        "shortCircuit": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 3
                        },
                        "questionToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "consequent": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "alternate": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "baz",
                                "rawText": "baz",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 15
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 18
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 20
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 21
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 21
                        },
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 21
                    },
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 26
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "foo ? bar : baz => {}, bar",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

foo ? bar : baz => {}, bar;
```

### Diagnostics

```javascript
✔ No errors
```

