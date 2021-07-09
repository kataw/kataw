# Kataw parser test case

### Printer Options

`````js
{ printWidth: 50, noSemicolon: true }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js
export default (function() {});
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 24
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 25
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 28
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 29
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 29
                },
                "flags": 14,
                "transformFlags": 0,
                "start": 32,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": true,
    "source": "export default (function() {});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
export default (function () {});
```

### Diagnostics

```javascript
✔ No errors
```

