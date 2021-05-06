# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {}
/foo/
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 261,
                    "specifiers": [],
                    "flags": 16,
                    "start": 8,
                    "end": 8
                },
                "flags": 1,
                "start": 6,
                "end": 9
            },
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 9,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 65,
                        "start": 9,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 11,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 14,
                    "end": 15
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 15,
                    "end": 15
                },
                "flags": 32,
                "start": 9,
                "end": 15
            },
            "flags": 16,
            "start": 9,
            "end": 15
        }
    ],
    "isModule": true,
    "source": "export {}\n/foo/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 9, end: 11
✖ Expression expected - start: 15, end: 15

```

