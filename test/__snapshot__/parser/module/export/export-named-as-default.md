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
                    "specifiers": [
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 8,
                                "end": 11
                            },
                            "asKeyword": {
                                "kind": 16494,
                                "flags": 64,
                                "start": 11,
                                "end": 14
                            },
                            "binding": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 14,
                                "end": 14
                            },
                            "flags": 16,
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
                                "flags": 96,
                                "start": 14,
                                "end": 22
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 14,
                            "end": 22
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 22
                },
                "flags": 0,
                "start": 6,
                "end": 23
            },
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": true,
    "source": "export {foo as default};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

  foo  , default };
```

### Diagnostics

```javascript
✖ Expression expected - start: 14, end: 22

```

