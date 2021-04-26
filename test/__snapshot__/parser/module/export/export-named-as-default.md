# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {foo as default};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 768,
                "start": 0,
                "end": 6
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 8,
                                "end": 11
                            },
                            "binding": {
                                "kind": 16637,
                                "text": "",
                                "autofix": 0,
                                "flags": 12,
                                "start": 14,
                                "end": 14
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 8,
                            "end": 14
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "default",
                                "rawText": "default",
                                "flags": 768,
                                "start": 14,
                                "end": 22
                            },
                            "binding": null,
                            "autofix": 0,
                            "flags": 128,
                            "start": 14,
                            "end": 22
                        }
                    ],
                    "autofix": 0,
                    "flags": 128,
                    "start": 8,
                    "end": 22
                },
                "autofix": 0,
                "flags": 0,
                "start": 6,
                "end": 23
            },
            "exportFromClause": null,
            "fromClause": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": true,
    "text": "export {foo as default};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 14, end: 22
@{x2716}@ Unexpected token. - start: 14, end: 22

```

