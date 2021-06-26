# Kataw parser test case

## Input

`````js
type T<U> = U;
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
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "U",
                                "rawText": "U",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 7,
                            "end": 8
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 7,
                    "end": 8
                },
                "flags": 2097152,
                "start": 6,
                "end": 9
            },
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 9,
                "end": 11
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "U",
                        "rawText": "U",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 11,
                    "end": 13
                },
                "flags": 2097152,
                "start": 11,
                "end": 13
            },
            "flags": 64,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "type T<U> = U;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

