# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
let x;
export { x }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 5
            },
            "flags": 33554448,
            "start": 0,
            "end": 6
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "start": 6,
                "end": 13
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 261,
                    "specifiers": [
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 15,
                                "end": 17
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 15,
                            "end": 17
                        }
                    ],
                    "flags": 16,
                    "start": 15,
                    "end": 17
                },
                "flags": 0,
                "start": 13,
                "end": 19
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 16,
            "start": 6,
            "end": 19
        }
    ],
    "isModule": true,
    "source": "let x;\nexport { x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

let x;
export { x };
```

### Diagnostics

```javascript
✔ No errors
```

