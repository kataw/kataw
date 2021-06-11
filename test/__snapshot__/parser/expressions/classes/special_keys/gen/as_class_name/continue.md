# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/classes/special_keys/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/special_keys/gen/as_class_name
> :: test: as class name
> :: case: continue
## Options

`````js
{}
`````
## Input

`````js
class continue {}
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
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 80,
                "start": 5,
                "end": 14
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 14,
                "end": 14
            },
            "flags": 16,
            "start": 5,
            "end": 14
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 16,
                "end": 16
            },
            "flags": 16,
            "start": 14,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "class continue {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 5, end: 14
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 5, end: 14
✖ Identifier expected - start: 14, end: 16
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 5, end: 16

```

