# Kataw parser test case

## Input

`````js
type X = (1);
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
                "text": "X",
                "rawText": "X",
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
                    "kind": 290,
                    "type": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134217968,
                            "text": 1,
                            "rawText": "1",
                            "flags": 2097216,
                            "start": 10,
                            "end": 11
                        },
                        "flags": 2097152,
                        "start": 10,
                        "end": 11
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 12
                },
                "flags": 2097152,
                "start": 8,
                "end": 12
            },
            "flags": 64,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "type X = (1);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

type X = (1)
```

### Diagnostics

```javascript
✔ No errors
```

