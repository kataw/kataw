# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression
> :: case: a\n get
## Input

`````js
class C extends Base { a\n get }
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
                "original": "C",
                "text": "C",
                "rawText": " C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "original": "Base",
                    "text": "Base",
                    "rawText": " Base",
                    "flags": 96,
                    "start": 15,
                    "end": 20
                },
                "typeParameter": null,
                "flags": 16,
                "start": 15,
                "end": 20
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "original": "a",
                            "text": "a",
                            "rawText": " a",
                            "flags": 96,
                            "start": 22,
                            "end": 24
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 22,
                        "end": 24
                    }
                ],
                "flags": 32,
                "start": 22,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "n",
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 25,
                "end": 26
            },
            "flags": 16,
            "start": 25,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "get",
                "text": "get",
                "rawText": " get",
                "flags": 96,
                "start": 26,
                "end": 30
            },
            "flags": 16,
            "start": 26,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "class C extends Base { a\\n get }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 22, end: 24
✖ Invalid hexadecimal escape sequence - start: 24, end: 24
✖ Statement expected - start: 24, end: 25
✖ Expected a `;` - start: 26, end: 30
✖ Statement expected - start: 30, end: 32

```

