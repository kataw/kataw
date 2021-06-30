# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {foo as bar} from "foo";
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
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 289,
                    "specifiers": [
                        {
                            "kind": 291,
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
                                "flags": 80,
                                "start": 11,
                                "end": 14
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 14,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 18
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 18
                },
                "flags": 0,
                "start": 6,
                "end": 19
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 325,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 19,
                    "end": 24
                },
                "from": {
                    "kind": 201392131,
                    "text": "foo",
                    "rawText": "\"foo\"",
                    "flags": 96,
                    "start": 24,
                    "end": 30
                },
                "flags": 0,
                "start": 19,
                "end": 30
            },
            "exportKind": 0,
            "flags": 80,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": true,
    "source": "export {foo as bar} from \"foo\";",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

export { foo as  bar, } from '"foo"';

```

### Diagnostics

```javascript
✔ No errors
```

