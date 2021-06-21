# Kataw parser test case

## Input

`````js
type A = Obj['a'];
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
                "text": "A",
                "rawText": "A",
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
                    "kind": 311,
                    "objectType": {
                        "kind": 144,
                        "typeName": {
                            "kind": 134299649,
                            "text": "Obj",
                            "rawText": "Obj",
                            "flags": 96,
                            "start": 8,
                            "end": 12
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 8,
                        "end": 12
                    },
                    "indexType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134217967,
                            "text": "a",
                            "flags": 2097216,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 2097152,
                        "start": 13,
                        "end": 16
                    },
                    "flags": 0,
                    "start": 8,
                    "end": 18
                },
                "flags": 2097152,
                "start": 8,
                "end": 17
            },
            "flags": 2097152,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "type A = Obj['a'];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

 type A = Obj[a] 
```

### Diagnostics

```javascript
✔ No errors
```

