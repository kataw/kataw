# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: yield\n a
## Input

`````js
class C extends Base { yield\n a }
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
                "kind": 134299649,
                "text": "Base",
                "rawText": "Base",
                "flags": 96,
                "start": 15,
                "end": 20
            },
            "flags": 16,
            "start": 15,
            "end": 20
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 22,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 22,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 22,
                "end": 28
            },
            "flags": 16,
            "start": 20,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 29,
                "end": 30
            },
            "flags": 16,
            "start": 29,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 30,
                "end": 32
            },
            "flags": 16,
            "start": 30,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "class C extends Base { yield\\n a }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 15
✖ Expected a `;` - start: 20, end: 22
✖ Invalid hexadecimal escape sequence - start: 22, end: 28
✖ Invalid hexadecimal escape sequence - start: 28, end: 28
✖ Expected a `;` - start: 28, end: 29
✖ Expected a `;` - start: 30, end: 32
✖ Declaration or statement expected - start: 32, end: 34

```

