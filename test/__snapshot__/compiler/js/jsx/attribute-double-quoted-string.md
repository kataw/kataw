# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<a href="/" />
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "<a href=\"/\" />",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 69766,
                "tagName": {
                    "kind": 129,
                    "text": "a",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 1,
                    "end": 2
                },
                "attributes": {
                    "kind": 123,
                    "attributesList": [
                        {
                            "kind": 122,
                            "name": {
                                "kind": 129,
                                "text": "href",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 2,
                                "end": 7
                            },
                            "initializer": {
                                "kind": 4261583,
                                "text": "/",
                                "rawText": "/",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 11
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 8192,
                            "start": 2,
                            "end": 11
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 2,
                    "end": 11
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 8192,
                "start": 0,
                "end": 14
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

