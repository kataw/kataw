# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration_paren
> :: case: a\n get
## Input

`````js
(class extends Base { a\n get });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 6,
                            "end": 14
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "Base",
                            "rawText": "Base",
                            "flags": 768,
                            "start": 14,
                            "end": 19
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 14,
                        "end": 19
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
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 21,
                                    "end": 23
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 21,
                                "end": 23
                            }
                        ],
                        "flags": 256,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 24,
                "end": 25
            },
            "flags": 128,
            "start": 24,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "get",
                "rawText": "get",
                "flags": 768,
                "start": 25,
                "end": 29
            },
            "flags": 128,
            "start": 25,
            "end": 29
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 32,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "(class extends Base { a\\n get });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 21, end: 23
✖ Invalid hexadecimal escape sequence - start: 23, end: 23
✖ Statement expected - start: 23, end: 24
✖ Statement expected - start: 29, end: 31
✖ Statement expected - start: 31, end: 32

```

