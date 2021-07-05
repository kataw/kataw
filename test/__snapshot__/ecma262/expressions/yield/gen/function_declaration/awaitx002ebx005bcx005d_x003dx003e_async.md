# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: await.b[c] => async
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { await.b[c] => async }}
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
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 130,
                                "member": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 26
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 27,
                                        "end": 28
                                    },
                                    "flags": 96,
                                    "start": 20,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 30
                                },
                                "flags": 536870944,
                                "start": 20,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 31
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 31
                },
                "flags": 32,
                "start": 18,
                "end": 31
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 34,
                "end": 40
            },
            "flags": 16,
            "start": 34,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "function not_gen() { await.b[c] => async }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 31, end: 34
✖ Declaration or statement expected - start: 40, end: 42
✖ Declaration or statement expected - start: 42, end: 43

```

