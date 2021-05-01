# Kataw parser test case

## Input

`````js
class A {; ;; ;}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 281,
                        "flags": 96,
                        "start": 9,
                        "end": 10
                    },
                    {
                        "kind": 281,
                        "flags": 96,
                        "start": 10,
                        "end": 12
                    },
                    {
                        "kind": 281,
                        "flags": 96,
                        "start": 12,
                        "end": 13
                    },
                    {
                        "kind": 281,
                        "flags": 96,
                        "start": 13,
                        "end": 15
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "class A {; ;; ;}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

