# Kataw parser test case

## Input

`````js
type x = [...aladdin];
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
                            "kind": 333,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 10,
                                "end": 13
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "aladdin",
                                        "rawText": "aladdin",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 20
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 13,
                                    "end": 20
                                },
                                "flags": 2097152,
                                "start": 13,
                                "end": 20
                            },
                            "flags": 2097216,
                            "start": 10,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 21
                },
                "flags": 2097152,
                "start": 8,
                "end": 21
            },
            "flags": 2097152,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "type x = [...aladdin];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

  
```

### Diagnostics

```javascript
✔ No errors
```

