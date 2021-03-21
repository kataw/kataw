# Kataw parser test case

## Input

`````js

export function foo() { }

//// [bar.ts]
import { foo } from './foo';

// These should emit identically
<any>foo;
(foo as any);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "\nexport function foo() { }\n\n//// [bar.ts]\nimport { foo } from './foo';\n\n// These should emit identically\n<any>foo;\n(foo as any);",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 16,
                    "end": 20
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 22
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 26
                },
                "typeParameters": null,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 256,
                "start": 7,
                "end": 26
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        },
        {
            "kind": 110,
            "fromClause": {
                "kind": 4261583,
                "text": "./foo",
                "rawText": "./foo",
                "flags": 33554432,
                "symbol": null,
                "transformFlags": 0,
                "start": 61,
                "end": 69
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
                        "specifiers": [
                            {
                                "kind": 113,
                                "moduleExportName": null,
                                "name": null,
                                "binding": {
                                    "kind": 4325406,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 54
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 54
                            }
                        ],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 50,
                        "end": 54
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 56
                },
                "isTypeOnly": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 48,
                "end": 56
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 48,
            "end": 70
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 134291684,
                "type": {
                    "kind": 4202498,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 106,
                    "end": 109
                },
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 110,
                    "end": 113
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 70,
                "end": 113
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 70,
            "end": 114
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 66224,
                "expression": {
                    "kind": 73738,
                    "expression": {
                        "kind": 196712,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 116,
                        "end": 119
                    },
                    "type": {
                        "kind": 4202498,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 122,
                        "end": 126
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 119,
                    "end": 126
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 114,
                "end": 127
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 114,
            "end": 128
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 128
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

