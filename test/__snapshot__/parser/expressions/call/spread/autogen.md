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
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "start": 8,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "use strict",
                            "flags": 4194400,
                            "start": 15,
                            "end": 28
                        }
                    ],
                    "statements": [],
                    "flags": 4194336,
                    "start": 15,
                    "end": 29
                },
                "flags": 32,
                "start": 13,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "fn",
                    "rawText": "fn",
                    "flags": 96,
                    "start": 30,
                    "end": 33
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 34,
                    "end": 34
                },
                "flags": 32,
                "start": 30,
                "end": 34
            },
            "flags": 16,
            "start": 30,
            "end": 34
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 38,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "function fn() { 'use strict';} fn( # );",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 34, end: 36
✖ Private identifiers are not allowed outside class_bodies - start: 34, end: 36
✖ Statement expected - start: 36, end: 38

```

