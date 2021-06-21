# Kataw parser test case

## Input

`````js
type x = [y?];
`````

## Options

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
                "text": "x",
                "rawText": "x",
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
                    "kind": 147,
                    "elementTypes": [
                        {
                            "kind": 334,
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 11,
                                "end": 12
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 11
                                },
                                "flags": 2097152,
                                "start": 10,
                                "end": 11
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 13
                },
                "flags": 2097152,
                "start": 8,
                "end": 13
            },
            "flags": 2097152,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "type x = [y?];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

 type x = [] 
```

### Diagnostics

```javascript
✔ No errors
```

