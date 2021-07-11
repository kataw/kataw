# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/declaration
> :: test: declaration
> :: case: delete x
## Options

`````js
{}
`````
## Input

`````js
class A extends delete x {}
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
                        "kind": 126,
                        "operandToken": {
                            "kind": 4259886,
                            "flags": 96,
                            "start": 15,
                            "end": 22
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 22,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 24
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 24
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 26,
                    "end": 26
                },
                "flags": 7,
                "start": 32,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "class A extends delete x {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 15, end: 24
✖ 'delete' cannot be called on an identifier in strict mode. - start: 24, end: 26

```

