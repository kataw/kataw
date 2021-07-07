# Kataw parser test case

## Input

`````js
function failsParse() {
  return import.then();
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
                "text": "failsParse",
                "rawText": "failsParse",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 19
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 20,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 32
                            },
                            "expression": {
                                "kind": 299,
                                "importKeyword": {
                                    "kind": 37814364,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 39
                                },
                                "metaIdentifier": null,
                                "flags": 39,
                                "transformFlags": 0,
                                "start": 96,
                                "end": 40
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 23,
                            "end": 40
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "then",
                                    "rawText": "then",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 44
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 40,
                                "end": 46
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 40,
                            "end": 47
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 47
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 49
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "function failsParse() {\n  return import.then();\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 39, end: 44
✖ 'import.meta' is the only valid meta property for import - start: 39, end: 44

```

