# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration
> :: case: /more crap/g
## Input

`````js
class A extends /more crap/g {}
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
            "members": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 221,
                        "text": "/more crap/g",
                        "flags": 96,
                        "start": 15,
                        "end": 28
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 28
                },
                "elements": [],
                "flags": 32,
                "start": 7,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "class A extends /more crap/g {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

class A  {}
```

### Diagnostics

```javascript
✔ No errors
```

