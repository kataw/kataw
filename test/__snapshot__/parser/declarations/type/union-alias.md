# Kataw parser test case

## Input

`````js
type UnionAlias = 1 | 2 | 3;
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
                "end": 15
            },
            "name": {
                "kind": 134299649,
                "text": "UnionAlias",
                "rawText": "UnionAlias",
                "flags": 96,
                "start": 4,
                "end": 15
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 15,
                "end": 17
            },
            "type": {
                "kind": 137,
                "types": [
                    {
                        "kind": 134217968,
                        "text": 1,
                        "flags": 2097216,
                        "start": 17,
                        "end": 19
                    },
                    {
                        "kind": 134217968,
                        "text": 2,
                        "flags": 2097216,
                        "start": 21,
                        "end": 23
                    },
                    {
                        "kind": 134217968,
                        "text": 3,
                        "flags": 2097216,
                        "start": 25,
                        "end": 27
                    }
                ],
                "flags": 2097152,
                "start": 19,
                "end": 27
            },
            "flags": 2097152,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "type UnionAlias = 1 | 2 | 3;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

