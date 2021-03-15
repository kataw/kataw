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
    "kind": 196,
    "source": "function fn() { 'use strict';} fn( # );",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "fn",
                "rawText": "fn",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 8,
                "end": 11
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 13
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 4261583,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 33554432,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 28
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 29
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 29
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 30
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 256,
            "start": 0,
            "end": 30
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 196712,
                    "text": "fn",
                    "rawText": "fn",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 33
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [
                        {
                            "kind": 196712,
                            "text": "#",
                            "rawText": "fn",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 36
                        }
                    ],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "intersects": false,
                    "start": 36,
                    "end": 38
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 33,
                "end": 38
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 30,
            "end": 39
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
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

