# Kataw parser test case

## Input

`````js
@A
class x {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [
                    {
                        "kind": 34611453,
                        "expression": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 1,
                        "start": 1,
                        "end": 2
                    }
                ],
                "flags": 32,
                "start": 1,
                "end": 2
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 2,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 12,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "@A\nclass x {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

@A
class x {}
```

### Diagnostics

```javascript
✔ No errors
```

