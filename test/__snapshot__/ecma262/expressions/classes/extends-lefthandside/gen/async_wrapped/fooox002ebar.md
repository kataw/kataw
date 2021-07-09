# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/async_wrapped
> :: test: async wrapped
> :: case: fooo.bar
## Options

`````js
{}
`````
## Input

`````js
async function p(){
  class C extends fooo.bar {}
}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "p",
                "rawText": "p",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
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
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 27
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 29
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 37
                                    },
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "fooo",
                                            "rawText": "fooo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 42
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 43,
                                            "end": 46
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 37,
                                        "end": 46
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 46
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 48
                                },
                                "flags": 29,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 49
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 49
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 49
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 51
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "async function p(){\n  class C extends fooo.bar {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
async function p() {
  class C extends fooo.bar {}
}
```

### Diagnostics

```javascript
✔ No errors
```

