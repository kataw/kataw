# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/demotion_through_asi/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/demotion_through_asi/gen/case
> :: test: case
> :: case: --x
## Options

`````js
{}
`````
## Input

`````js
function f(){
  "use strict"
  --x
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
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
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "\"use strict\"",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 28
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 28
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196636,
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 33
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 34
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 34
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 34
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 34
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 36
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "function f(){\n  \"use strict\"\n  --x\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
function f() {
  "\"use strict\"";
  -- x;
}
```

### Diagnostics

```javascript
✔ No errors
```

