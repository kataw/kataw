# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
export default function <T>() {}
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
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 23
                },
                "asteriskToken": null,
                "name": null,
                "typeParameters": {
                    "kind": 307,
                    "declarations": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 26
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 512,
                    "start": 25,
                    "end": 26
                },
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 28
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 32
                },
                "returnType": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "export default function <T>() {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
export default function () {};
```

### Diagnostics

```javascript
✔ No errors
```

