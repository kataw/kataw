# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_function_block
> :: test: in function block
> :: case: import { 123 } from "foo";
## Input

`````js
function x() {import { 123 } from "foo";}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function x() {import { 123 } from \"foo\";}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 12
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 110,
                            "fromClause": {
                                "kind": 4261540,
                                "text": 123,
                                "rawText": "123",
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 26
                            },
                            "moduleSpecifier": null,
                            "importClause": {
                                "kind": 109,
                                "defaultBinding": null,
                                "nameSpaceImport": null,
                                "namedImports": {
                                    "kind": 153,
                                    "importsList": {
                                        "kind": 115,
                                        "specifiers": [],
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 22
                                },
                                "isTypeOnly": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 26
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 26
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 12,
                "end": 28
            },
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 256,
            "start": 0,
            "end": 28
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "from",
                "rawText": "from",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 28,
            "end": 33
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "foo",
                "rawText": "foo",
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 33,
                "end": 39
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 33,
            "end": 40
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'}' expected.",
            "start": 23,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 34,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 40,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

