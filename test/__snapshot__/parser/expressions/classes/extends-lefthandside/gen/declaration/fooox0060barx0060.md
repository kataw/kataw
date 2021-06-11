# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/extends-lefthandside/gen/declaration
> :: test: declaration
> :: case: fooo`bar`
## Options

`````js
{}
`````
## Input

`````js
class A extends fooo`bar` {}
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
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "fooo",
                            "rawText": "fooo",
                            "flags": 96,
                            "start": 15,
                            "end": 20
                        },
                        "template": {
                            "kind": 458761,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 134217824,
                            "start": 20,
                            "end": 25
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 25
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 25
                },
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 27,
                    "end": 27
                },
                "flags": 7,
                "start": 32,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "class A extends fooo`bar` {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
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

