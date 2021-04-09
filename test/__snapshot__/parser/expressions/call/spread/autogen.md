# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> ...([1, 2, 3])
> `````

> `````js
> ...'123', ...'456'
> `````

> `````js
> ...new Set([1, 2, 3]), 4
> `````

> `````js
> 1, ...[2, 3], 4
> `````

> `````js
> ...Array(...[1,2,3,4])
> `````

> `````js
> 0, 1, ...[2, 3, 4], 5, 6, 7, ...'89'
> `````

> `````js
> 0, 1, ...[2, 3, 4], 5, 6, 7, ...'89', 10
> `````

> `````js
> ...[0, 1, 2], 3, 4, 5, 6, ...'7', 8, 9
> `````

> `````js
> ...[0, 1, 2], 3, 4, 5, 6, ...'7', 8, 9, ...[10]
> `````

### Templates

#### wih-use-strict

`````js
function fn() { 'use strict';} fn( # );
`````

#### as-func-decl

`````js
function fn() {} fn( # );
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "fn",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 67174403,
                                "value": "use strict",
                                "autofix": 0,
                                "flags": 768,
                                "start": 15,
                                "end": 28
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 15,
                            "end": 29
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "fn",
                    "autofix": 0,
                    "flags": 768,
                    "start": 30,
                    "end": 33
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 81921,
                            "value": "#",
                            "autofix": 0,
                            "flags": 768,
                            "start": 34,
                            "end": 36
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 34,
                    "end": 36
                },
                "flags": 256,
                "start": 30,
                "end": 38
            },
            "autofix": 0,
            "flags": 128,
            "start": 30,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "function fn() { 'use strict';} fn( # );",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34,
            "end": 36
        }
    ],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

