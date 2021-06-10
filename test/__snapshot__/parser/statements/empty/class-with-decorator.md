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
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "flags": 0,
                        "start": 1,
                        "end": 2
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 2
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 0,
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
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 12,
                    "end": 12
                },
                "flags": 10,
                "start": 32,
                "end": 13
            },
            "flags": 17,
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

