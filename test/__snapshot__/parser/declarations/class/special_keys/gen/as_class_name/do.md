# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/declarations/class/special_keys/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\class\special_keys\gen\as_class_name
> :: test: as class name
> :: case: do
## Input

`````js
class do {}
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
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 5,
                "end": 5
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 5,
                    "end": 5
                },
                "flags": 5,
                "start": 32,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 5,
                "end": 8
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 11,
                "end": 11
            },
            "whileKeyword": null,
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 10,
                    "end": 10
                },
                "flags": 16,
                "start": 8,
                "end": 11
            },
            "flags": 16,
            "start": 5,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "class do {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 8
✖ Missing an opening parentheses - '( - start: 11, end: 11

```

