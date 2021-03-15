# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
try {} catch (e: any)
{}

try {}
catch (e: unknown) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "try {} catch (e: any)\n{}\n\ntry {}\ncatch (e: unknown) {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097375,
            "block": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 2095,
                "catchParameter": {
                    "kind": 2097403,
                    "binding": {
                        "kind": 131102,
                        "text": "e",
                        "rawText": "e",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 14,
                        "end": 15
                    },
                    "type": {
                        "kind": 4202498,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 16,
                        "end": 20
                    },
                    "initializer": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 20
                },
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 24
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 24
            },
            "finallyBlock": null,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        },
        {
            "kind": 2097375,
            "block": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 31
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 29,
                "end": 32
            },
            "catchClause": {
                "kind": 2095,
                "catchParameter": {
                    "kind": 2097403,
                    "binding": {
                        "kind": 131102,
                        "text": "e",
                        "rawText": "e",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 1025,
                        "start": 40,
                        "end": 41
                    },
                    "type": {
                        "kind": 4202738,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 42,
                        "end": 50
                    },
                    "initializer": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 50
                },
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 53,
                        "end": 53
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 54
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 32,
                "end": 54
            },
            "finallyBlock": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 54
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
    "end": 54
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

