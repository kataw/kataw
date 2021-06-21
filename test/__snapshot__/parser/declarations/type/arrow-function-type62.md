# Kataw parser test case

## Input

`````js
type a = () => T;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 292,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 10,
                        "end": 10
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 11,
                        "end": 14
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 14,
                                "end": 16
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 2097152,
                        "start": 14,
                        "end": 16
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 16
                },
                "flags": 2097152,
                "start": 8,
                "end": 16
            },
            "flags": 2097152,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "type a = () => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

  
```

### Diagnostics

```javascript
✔ No errors
```

