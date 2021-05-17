# Kataw parser test case

## Input

`````js
class C extends (
  a,
  c
) {
}
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 17,
                            "end": 21
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 22,
                            "end": 26
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 28
                },
                "flags": 32,
                "start": 15,
                "end": 28
            },
            "flags": 16,
            "start": 15,
            "end": 28
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 17,
                "start": 30,
                "end": 30
            },
            "flags": 16,
            "start": 28,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "class C extends (\n  a,\n  c\n) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 15
✖ Expected a `;` - start: 28, end: 30

```

