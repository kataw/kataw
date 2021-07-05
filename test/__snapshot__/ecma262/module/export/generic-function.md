# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
export function d(): Promise<boolean> {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 6,
                    "end": 15
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 18,
                    "end": 18
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 40
                },
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 144,
                        "typeName": {
                            "kind": 134299649,
                            "text": "Promise",
                            "rawText": "Promise",
                            "flags": 96,
                            "start": 20,
                            "end": 28
                        },
                        "typeParameters": {
                            "kind": 310,
                            "typeInstantiations": {
                                "kind": 309,
                                "types": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234254,
                                            "flags": 2097216,
                                            "start": 29,
                                            "end": 36
                                        },
                                        "flags": 2097152,
                                        "start": 29,
                                        "end": 36
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 29,
                                "end": 36
                            },
                            "flags": 2097152,
                            "start": 28,
                            "end": 37
                        },
                        "flags": 2097152,
                        "start": 20,
                        "end": 37
                    },
                    "flags": 2097152,
                    "start": 20,
                    "end": 37
                },
                "flags": 16,
                "start": 6,
                "end": 40
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": true,
    "source": "export function d(): Promise<boolean> {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

export function d(): Promise<boolean > {}
```

### Diagnostics

```javascript
✔ No errors
```

