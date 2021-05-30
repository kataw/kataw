# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/classes/special_keys/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\classes\special_keys\gen\as_class_name
> :: test: as class name
> :: case: interface
## Input

`````js
class interface {}
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
                "kind": 134299649,
                "text": "interface",
                "rawText": "interface",
                "flags": 96,
                "start": 5,
                "end": 15
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 17,
                    "end": 17
                },
                "flags": 15,
                "start": 32,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "class interface {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

class interface {}
```

### Diagnostics

```javascript
✔ No errors
```

